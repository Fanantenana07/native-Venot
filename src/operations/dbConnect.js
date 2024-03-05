import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("employees.db");

export const openDatabaseConnection = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY AUTOINCREMENT, matricule TEXT UNIQUE, name TEXT, taux REAL, houre INTEGER)", [],
            () => console.log("Table created successfully"),
            (error) => console.error("Error creating table:", error)
        );
    });

    return db;
};

// Initialize database connection