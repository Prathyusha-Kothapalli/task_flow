# Contributing to TaskFlow

## Branching Strategy
- \eature/<feature-name>\
- \ugfix/<bug-name>\
- \docs/<doc-name>\

## Running Tests
\\\ash
npm run test
\\\
"@


# ==========================================
# 5. PASSVAULT (5 PRs)
# ==========================================
 = "c:\Users\HP\github based project\passvault"
 = "Prathyusha-Kothapalli/passvault"

Execute-PR -RepoPath  -GitHubRepo  
    -BranchName "feature/password-generator-options" 
    -PRTitle "Add configurable password generator module" 
    -PRBody "Supports custom length, symbols, numbers, and uppercase characters." 
    -FilePath "\client\js\passwordGenerator.js" 
    -FileContent @"
class PasswordGenerator {
    static generate(options = {}) {
        const length = options.length || 16;
        const useSymbols = options.symbols !== false;
        const useNumbers = options.numbers !== false;
        
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (useNumbers) chars += '0123456789';
        if (useSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let password = '';
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }
}
if (typeof module !== 'undefined') module.exports = PasswordGenerator;