--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------
CREATE TABLE
    Urls (
        id INTEGER PRIMARY KEY,
        longUrl TEXT NOT NULL,
        shortUrl TEXT UNIQUE NOT NULL
    );

INSERT INTO
    Urls (id, longUrl, shortUrl)
VALUES
    (1, 'https://google.com', 'http://localhost:3002/s/lzcqd0ldmgzxdkfv7f');

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------
DROP TABLE Urls;