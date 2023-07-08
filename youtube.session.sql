-- An SQL comment that starts with "-- @block" can be used to run the below individually

-- @block
CREATE TABLE videos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title TEXT,
    thumbnail TEXT,
    view_count INT,
    upload_date DATETIME,
    channel_id INT NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (channel_id) REFERENCES channels(id)
);

-- @block
CREATE TABLE channels (
    id INT PRIMARY KEY AUTO_INCREMENT,
    channel_name VARCHAR(25),
    channel_pfp TEXT
);

-- @block
INSERT INTO videos (title, thumbnail, view_count, channel_id) VALUES (
    'Test Video',
    'assets/video/video-thumbnail-1',
    3,
    123
),
(
    'New Video',
    'assets/video/video-thumbnail-2',
    30,
    321
);

-- @block
SELECT * FROM videos;