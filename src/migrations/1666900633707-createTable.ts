import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1666900633707 implements MigrationInterface {
    name = 'createTable1666900633707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("isbn" character varying(50) NOT NULL, "name" character varying(60) NOT NULL, "author" character varying(60) NOT NULL, "pages" integer NOT NULL, "copies" integer NOT NULL, CONSTRAINT "PK_54337dc30d9bb2c3fadebc69094" PRIMARY KEY ("isbn"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
