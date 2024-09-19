import { Module, NestModule } from "@nestjs/common";
import { GoogleService } from "./google.service";
import { GoogleController } from "./google.controller";
import { MiddlewareConsumer

 } from "@nestjs/common";
import { RequestInterceptorMiddleware } from "src/providers/middlewares";

@Module({
    providers: [GoogleService],
    controllers: [GoogleController]
})
export class GoogleModule {

    // configure(consumer: MiddlewareConsumer) {
    //     consumer
    //       .apply(RequestInterceptorMiddleware)
    //       .forRoutes('/fulfillment')
    //   }

}