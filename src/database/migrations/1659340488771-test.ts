import {MigrationInterface, QueryRunner} from "typeorm";

export class test1659340488771 implements MigrationInterface {
    name = 'test1659340488771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("user_id" integer NOT NULL, "user_name" character varying, "email" character varying, "password" character varying, "role" character varying, CONSTRAINT "PK_02777d5180610e45ddbb9bd5429" PRIMARY KEY ("user_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}
