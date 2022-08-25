import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AppResolver {

    @Query()
    health() {
        return "App is healthy";
    }
}