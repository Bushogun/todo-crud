Scaffold-DbContext "Server=MINOTAURO\\SQLEXPRESS; DataBase=ToDoDB;Integrated Security=true" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models

Server=MINOTAURO\\SQLEXPRESS;Database=ToDoDB;Trusted_Connection=True;TrustServerCertificate=True;"



Add-Migration "Add_Todo_Table"
Update-Database

# CoctailFront
In this repository you will find an SQL with requested queries and a REACT project that performs filtering and information display operations
Before starting you must check if you have a node version equal to or greater than 16 (do it with the "npm -v" command) and an npm version equal to or greater than 9 (do it with the "npm -v" command)

1. Go to the link https://github.com/Bushogun/
2. Right click -> Extract here
3. Open folder in Visual Studio Code
4. New terminal (ctrl + shift + ñ)
5. Run de command ""
6. Run the command "npm i"
7. Run the command "npm run dev"
8. Go to "" on you browser


<p align="right">
  <img src="https://media.giphy.com/media/SvFocn0wNMx0iv2rYz/giphy.gif" alt="GIF Animado">
</p>
