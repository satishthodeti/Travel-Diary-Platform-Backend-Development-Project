CREATE SCHEMA IF NOT EXISTS tdp;

CREATE SEQUENCE tdp.users_seq;
CREATE TABLE IF NOT EXISTS tdp.users (
    user_id SERIAL PRIMARY KEY,
    tun TEXT NOT NULL DEFAULT 'TUN' || nextval('tdp.users_seq'::regclass)::TEXT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    user_email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    date_of_birth DATE,
    profile_picture TEXT,
    is_admin BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    is_deleted BOOLEAN DEFAULT false
);

CREATE SEQUENCE tdp.diary_entries_seq;
CREATE TABLE IF NOT EXISTS tdp.diary_entries (
    entry_id SERIAL PRIMARY KEY,
    ude TEXT NOT NULL DEFAULT 'UDE' || nextval('tdp.diary_entries_seq'::regclass)::TEXT,
    user_id INT REFERENCES tdp.users(user_id),
    title TEXT NOT NULL,
    description TEXT,
    date DATE,
    location TEXT,
    photos TEXT[],
    created_by INT REFERENCES tdp.users(user_id),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    is_deleted BOOLEAN DEFAULT false
);
