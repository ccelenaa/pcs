import { Injectable } from '@nestjs/common';
import { Page, Publication } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProbeDto } from './dto/create-probe.dto';
import { UpdateProbeDto } from './dto/update-probe.dto';

@Injectable()
export class PageService {
  constructor(private prisma: PrismaService) {}

  create(createProbeDto: CreateProbeDto) {
    return 'This action adds a new probe';
  }

  findAll() {
    return `This action returns all probes`;
  }

  async findOne(id: string): Promise<Page> {
    const page = await this.prisma.page.findFirst({
      where: {
        id: id
      },
      include: {
        page_covers: {
          select:{
            cover: true
          },
          orderBy: {
            position: 'asc'
          }
        },
        page_publications: {
          select: {
            position: true,
            pined_at: true,
            publication: true
          },
          orderBy: {
            pined_at: 'desc'
          },
          take: 10
        }
      }
    });

    const imagesPath = '/public/images';

    page['covers'] = page.page_covers.map((e) => {
      const c = e.cover;
      return {
        ...c,
        url: c.image.startsWith('http') ? c.image : `${imagesPath}/${c.image}`
      };
    });
    
    console.log(page['covers'].length);
    // .filter((cov) => {
    //   const {requireAuth = false} = cov.options;

    //   return isAuthenticated || !requireAuth;
    // });


    page['publications'] = page.page_publications.map((e) => ({
      ...e.publication,
      position: e.position,
      pined_at: e.pined_at,
    }));

    page['publications'] = await Promise.all(page['publications'].map(async (e: Publication) => {
      let model: any = null;

      switch (e.content_type) {
        case 'events': model = this.prisma.event; break;
        case 'choices': model = this.prisma.choice; break;
        case 'documents': model = this.prisma.document; break;
      }

      if (model) {
        const content = await model.findFirst({
          where: {
            id: e.content_id
          }
        });

        e['content'] = content;
      }

      return e;
    }));

    delete page.page_covers;
    delete page.page_publications;

    return page;
  }

  update(id: number, updateProbeDto: UpdateProbeDto) {
    return `This action updates a #${id} probe`;
  }

  remove(id: number) {
    return `This action removes a #${id} probe`;
  }
}
