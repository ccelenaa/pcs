import { Injectable, Logger } from '@nestjs/common';
import * as cron from 'node-cron';

// Minutes Heurs Jours Mois JourSemaine
// * * * * * => chaque minutes
// 0 0 1 * * => le premier de chaque mois a 00:00

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  constructor() {
    this.facturationPrestataires();
  }

  private facturationPrestataires() {
    cron.schedule('* * * * *', () => {
      console.log(`La tâche cron s'est déclenchée ...`);
    });
  }
}