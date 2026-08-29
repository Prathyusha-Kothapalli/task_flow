class BackupUtility {
    static exportTasks(tasks) {
        return JSON.stringify({ version: '1.0', exportedAt: new Date().toISOString(), tasks }, null, 2);
    }
    static importTasks(jsonString) {
        const data = JSON.parse(jsonString);
        if (!data || !Array.isArray(data.tasks)) {
            throw new Error('Invalid backup file format');
        }
        return data.tasks;
    }
}
if (typeof module !== 'undefined') module.exports = BackupUtility;