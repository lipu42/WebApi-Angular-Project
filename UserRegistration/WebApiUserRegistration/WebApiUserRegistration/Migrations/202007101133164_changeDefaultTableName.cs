namespace WebApiUserRegistration.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeDefaultTableName : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.AspNetUsers", newName: "UserLogin");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.UserLogin", newName: "AspNetUsers");
        }
    }
}
