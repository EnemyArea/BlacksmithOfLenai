using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "PlayFab API",
        Version = "v1",
        Description = "API"
    });
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev",
        policy => policy
            .WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger(c => { c.RouteTemplate = "swagger/{documentName}/swagger.yaml"; });
    app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.yaml", "PlayFab API V1 (YAML)"); });
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCors("AllowAngularDev");
app.MapControllers();
app.Run();