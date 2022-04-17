import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CriarUsuario1645468464866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [{
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isNullable: false
                },{
                    name: "name",
                    type: 'varchar',
                    isNullable: false,
                },{
                    name: "email",
                    type: "varchar",
                    isNullable: true
                }
            ]
            })
        ,true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}
