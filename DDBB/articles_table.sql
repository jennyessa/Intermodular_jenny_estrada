CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,       -- Identificador único del artículo
    title VARCHAR(100) NOT NULL,             -- Título del artículo
    text TEXT NOT NULL,                      -- Extracto del artículo (resumen breve)
    excerpt TEXT NOT NULL,                   -- Contenido completo del artículo
    image VARCHAR(100),                      -- Imagen asociada al artículo (nombre de archivo)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Fecha de creación del artículo
);
