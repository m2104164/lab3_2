import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1682448398651 implements MigrationInterface {
    name = 'initial1682448398651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "factories" ("id" SERIAL NOT NULL, "full" character varying NOT NULL, "address" character varying NOT NULL, "contact" character varying NOT NULL, CONSTRAINT "PK_177dc0be43525ae77a73639eb70" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "companies" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "retailers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "contact" character varying NOT NULL, CONSTRAINT "PK_1228653999402b52e75d40b1c66" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "retailers"`);
        await queryRunner.query(`DROP TABLE "companies"`);
        await queryRunner.query(`DROP TABLE "factories"`);
    }

}
