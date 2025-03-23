import { MigrationInterface, QueryRunner } from "typeorm";

export class SetDefaultForRefreshTokenUserTable1738489254920 implements MigrationInterface {
    name = 'SetDefaultForRefreshTokenUserTable1738489254920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`refresh_token\` \`refresh_token\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`refresh_token\` \`refresh_token\` varchar(255) NOT NULL`);
    }

}
