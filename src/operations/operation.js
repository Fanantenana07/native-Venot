import * as SQLite from "expo-sqlite";
const dbs = SQLite.openDatabase("employees.db");

export const insertEmployee = (employee, db) => {
  //   dbs.transaction((tx) => {
  //     tx.executeSql(
  //       "CREATE TABLE IF NOT EXISTS profs (matricule TEXT PRIMARY KEY, nom TEXT, tauxHoraire REAL, nbHeure INTEGER)",
  //       [],
  //       () => console.log("Table created successfully"),
  //       (error) => console.error("Error creating table:", error)
  //     );
  //   });

  dbs.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO profs (matricule, nom, tauxHoraire, nbHeure) VALUES (?, ?, ?, ?)",
      [
        employee.matricule,
        employee.nom,
        employee.tauxHoraire,
        employee.nbHeure,
      ],
      () => console.log("Employee added successfully"),
      (error) => console.error("Error adding employee:", error)
    );
  });
};

export const updateEmployee = (employee) => {
  db.transaction((tx) => {
    tx.executeSql(
      "UPDATE professeurs SET matricule=?, nom=?, tauxHoraire=?, nbHeure=? WHERE id=?",
      [
        employee.matricule,
        employee.nom,
        employee.tauxHoraire,
        employee.nbHeure,
        employee.id,
      ],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log("Employee updated successfully");
        } else {
          console.log("Failed to update employee");
        }
      }
    );
  });
};

export const getprofesseurs = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM professeurs",
        [],
        (tx, results) => {
          let professeurs = [];
          for (let i = 0; i < results.rows.length; i++) {
            professeurs.push(results.rows.item(i));
          }
          resolve(professeurs);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

export const deleteEmployee = (id) => {
  db.transaction((tx) => {
    tx.executeSql("DELETE FROM professeurs WHERE id=?", [id], (tx, results) => {
      if (results.rowsAffected > 0) {
        console.log("Employee deleted successfully");
      } else {
        console.log("Failed to delete employee");
      }
    });
  });
};
