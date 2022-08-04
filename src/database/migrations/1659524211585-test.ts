import {MigrationInterface, QueryRunner} from "typeorm";

export class test1659524211585 implements MigrationInterface {
    name = 'test1659524211585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emailtemplate" ADD "image" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emailtemplate" DROP COLUMN "image"`);
    }

}
