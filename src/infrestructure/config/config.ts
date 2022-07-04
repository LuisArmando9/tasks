import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { TaskEntity } from 'src/core/domain/entities'
@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor (private configService: ConfigService) {}
  createTypeOrmOptions (): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      username: this.configService.get<string>('DB_USER'),
      password:this.configService.get<string>('DB_PASSWORD'),
      port:this.configService.get<number>("DB_PORT") || 3306,
      host:this.configService.get<string>("DB_HOST"),
      database:this.configService.get<string>("DB_NAME"),
      entities:[TaskEntity]
    }
  }
}
