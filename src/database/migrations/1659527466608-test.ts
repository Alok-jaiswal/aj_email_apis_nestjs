import {MigrationInterface, QueryRunner} from "typeorm";

export class test1659527466608 implements MigrationInterface {
    name = 'test1659527466608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emailtemplate" ADD "template_name" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emailtemplate" DROP COLUMN "template_name"`);
    }

}
