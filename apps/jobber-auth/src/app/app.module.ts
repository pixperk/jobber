import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriverConfig, ApolloDriver} from "@nestjs/apollo";
import { UsersModule } from "./users/users.module";

@Module({
  imports : [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UsersModule
  ],
  providers : []
})
export class AppModule {}
