using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hangman.Backend.Migrations
{
    public partial class Top10Players : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NrOfSolvedGames",
                table: "Players",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "NrOfUnsolvedGames",
                table: "Players",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NrOfSolvedGames",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "NrOfUnsolvedGames",
                table: "Players");
        }
    }
}
