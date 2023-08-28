#!/usr/bin/python3
"""
Script to list all states that match a given argument.

This script takes a state name as an argument and retrieves all states
from a MySQL database that match the provided state name.

Usage:
    script_name.py <username> <password> <database> <state_name>

Arguments:
    <username>: The username for the MySQL database.
    <password>: The password for the MySQL database.
    <database>: The name of the MySQL database to connect to.
    <state_name>: The name of the state to search for.

Requirements:
    - Python 3.x
    - MySQLdb library

Example:
    To search for states with the name "California" in the database "states_db":
    $ script_name.py user pass states_db California
"""

import sys
import MySQLdb

if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: {} <username> <password> <database> <state_name>"
              .format(sys.argv[0]))
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database_name = sys.argv[3]
    state_name = sys.argv[4]

    try:
        conn = MySQLdb.connect(
            host="localhost",
            port=3306,
            user=username,
            passwd=password,
            db=database_name
        )
        cur = conn.cursor()
        query = "SELECT * FROM states WHERE BINARY name = %s ORDER BY id ASC"
        cur.execute(query, (state_name,))
        states = cur.fetchall()
        for state in states:
            print(state)
        cur.close()
        conn.close()

    except MySQLdb.Error as e:
        print("MySQL Error:", e)
        sys.exit(1)
