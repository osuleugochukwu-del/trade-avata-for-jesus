# Firebase Backend Integration — Next Stage

The frontend is structured so the live backend can be connected without redesigning the site.

Recommended collections/services:
- users / profiles / roles
- learningProgress / savedContent / purchases / downloads
- analyticsAccounts / analyticsPreferences / analyticsReports
- journalWorkspaces / journalEntries / journalTemplates
- copyMasters / copyAccounts / copyEvents / copyRiskSettings
- products / courses / lessons / articles / homepageContent
- supportTickets / notifications / emailMessages
- adminRoles / auditLogs / siteSettings

Use Firebase Auth + Firestore + Storage + Functions. Copy-trading execution should remain in a separate secure server/VPS service, with Firebase holding permissions, configuration, status and audit data rather than broker credentials in public client code.
