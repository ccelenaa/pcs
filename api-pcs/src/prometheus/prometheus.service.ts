import { Injectable } from '@nestjs/common';
import { SrvRecord } from 'dns';
import { Registry, collectDefaultMetrics, Histogram, Gauge, Counter, Metric, CounterConfiguration } from 'prom-client';
import {typeCheck as check} from 'type-check';

export type PrometheusHistogram = Histogram<string>;

interface MapHistogram {
  [key: string]: Histogram<string>;
}

interface MapGauge {
  [key: string]: Gauge<string>;
}

const HTTP_DEFAULT = 0;
const HTTP_OK = 200;

const MILLISECONDS = 1000;

const DEFAULT_CONFIG = {
  exclude: [],
  metrics: ['status', 'path_duration', 'path_count'],
  pathLimit: 100,
  timeout: 1000
};

@Injectable()
export class PrometheusService {
  private serviceTitle = 'Backend-For-Frontend';
  public servicePrefix = 'FrontendMetrics_';
  public registeredMetrics: Record<string, Metric<string>>;
  private readonly registry: Registry;
  public static instance: PrometheusService = null;

  public static getInstance() {
    if(this.instance) {
      return this.instance
    }

    return new PrometheusService();
  }

  constructor() {
    if(PrometheusService.instance) {
      return PrometheusService.instance;
    }

    PrometheusService.instance = this;
    this.registry = new Registry();
    collectDefaultMetrics({register: this.registry});
    this.createMetrics(['status','path_duration','path_count']);
  }


  public checkConfig (cfg) {
    if (!check('Object', cfg)) {
      throw new TypeError('Argument config must be an object');
    }
  
    const config = { ...DEFAULT_CONFIG, ...cfg };
  
    if (!check('[String]', config.metrics)) {
      throw new TypeError('config.metrics must be a string[]');
    }
  
    if (!check('String | RegExp | Function | [String | RegExp | Function]', config.exclude)) {
      throw new TypeError('config.exclude must be one/array of (string | RegExp | function)');
    }
  
    if (!check('Number', config.timeout) || config.timeout < MILLISECONDS) {
      throw new TypeError('config.timeout must be a number greater or equal to 1000');
    }
  
    if (!check('Number', config.pathLimit) || config.pathLimit < 0) {
      throw new TypeError('config.pathLimit must be a number greater or equal to 0');
    }
  
    if (!Array.isArray(config.exclude)) {
      config.exclude = [config.exclude];
    }
  
    return config;
  };

  public createMetrics (names): Record<string, Metric<string>> {
    const metrics: Record<string, Metric> = {};

    if (names.includes('status')) {
      metrics['status'] = new Counter({
        name: 'restify_status_codes',
        help: 'Number of response for each HTTP status code.',
        labelNames: ['status_code'],
      });
    }

    if (names.includes('path_duration')) {
      metrics['pathDuration'] = new Histogram({
        name: 'restify_path_duration',
        help: 'Histogram of response time in seconds for each request path / status code',
        labelNames: ['method', 'path', 'status_code']
      });
    }

    if (names.includes('path_count')) {
      metrics['pathCount'] = new Counter({
        name: 'restify_path_count',
        help: 'Number of calls to each path',
        labelNames: ['method', 'path', 'status_code']
      });
    }

    Object.values(metrics).forEach(metric => this.registry.registerMetric(metric));

    this.registeredMetrics = metrics;
    return metrics;
  }
  
  public isExcluded (path, filters, cache) {
    if (cache.hasOwnProperty(path)) {
      return cache[path];
    }
  
    const excluded = filters.some((filter) => {
      if (filter instanceof RegExp) {
        return filter.test(path);
      }
  
      if (typeof filter === 'function') {
        return !!filter(path);
      }
  
      return path === filter; // String filter
    });
  
    cache[path] = excluded;
  
    return excluded;
  }

  public registerMetrics(
    name: string,
    help: string,
    labelNames: string[],
    buckets: number[]
  ): Metric<string> {
    if (this.registeredMetrics[name] === undefined) {
      const histogram = new Histogram({ name, help, labelNames, buckets });
      this.registry.registerMetric(histogram);
      this.registeredMetrics[name] = histogram;
    }
    return this.registeredMetrics[name];
  }

  // public registerGauge(name: string, help: string): Gauge<string> {
  //   if (this.registeredGauges[name] === undefined) {
  //     const gauge = (this.registeredGauges[name] = new Gauge({
  //       name: this.servicePrefix + name,
  //       help,
  //     }));
  //     this.registry.registerMetric(gauge);
  //     this.registeredGauges[name] = gauge;
  //   }
  //   return this.registeredGauges[name];
  // }

  public removeSingleMetric(name: string): void {
    return this.registry.removeSingleMetric(name);
  }

  public clearMetrics(): void {
    this.registry.resetMetrics();
    return this.registry.clear();
  }

  async getMetrics() {
    return await this.registry.metrics();
  }
  public get metrics() {
    return this.registry.metrics();
  }
}