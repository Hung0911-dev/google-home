import { Module, NestModule, OnModuleInit } from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { RequestInterceptorMiddleware } from "../providers/middlewares";
@Module({
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {
}