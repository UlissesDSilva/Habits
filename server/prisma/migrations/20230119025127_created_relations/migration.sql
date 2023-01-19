-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DayHabit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "day_id" TEXT NOT NULL,
    "habit_id" TEXT NOT NULL,
    CONSTRAINT "DayHabit_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "Day" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DayHabit_habit_id_fkey" FOREIGN KEY ("habit_id") REFERENCES "Habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DayHabit" ("day_id", "habit_id", "id") SELECT "day_id", "habit_id", "id" FROM "DayHabit";
DROP TABLE "DayHabit";
ALTER TABLE "new_DayHabit" RENAME TO "DayHabit";
CREATE UNIQUE INDEX "DayHabit_day_id_habit_id_key" ON "DayHabit"("day_id", "habit_id");
CREATE TABLE "new_HabitWeekDays" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "habit_id" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL,
    CONSTRAINT "HabitWeekDays_habit_id_fkey" FOREIGN KEY ("habit_id") REFERENCES "Habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_HabitWeekDays" ("habit_id", "id", "week_day") SELECT "habit_id", "id", "week_day" FROM "HabitWeekDays";
DROP TABLE "HabitWeekDays";
ALTER TABLE "new_HabitWeekDays" RENAME TO "HabitWeekDays";
CREATE UNIQUE INDEX "HabitWeekDays_habit_id_week_day_key" ON "HabitWeekDays"("habit_id", "week_day");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
