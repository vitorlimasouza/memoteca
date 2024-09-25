using Memoteca.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var connetionString = Environment.GetEnvironmentVariable("ConnectionStrings");

if (connetionString != null)
// var connetionString = builder.Configuration.GetConnectionString("Connection");

builder.Services.AddDbContext<MemotecaContext>(options =>  
                options.UseNpgsql(connetionString));


builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Configuração do CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

// Aplicando a política CORS
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
