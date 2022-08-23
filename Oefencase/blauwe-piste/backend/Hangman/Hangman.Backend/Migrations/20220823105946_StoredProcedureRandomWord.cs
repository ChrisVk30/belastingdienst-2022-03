using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hangman.Backend.Migrations
{
    public partial class StoredProcedureRandomWord : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE PROCEDURE [dbo].[csp_getRandomWord_s01]
                AS
                BEGIN
                    SET NOCOUNT ON;
                    SELECT TOP 1 * FROM Words ORDER BY NEWID();
                END";
            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // verwijder SP
        }
    }
}
