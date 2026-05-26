# DNS Records to Add

Add the following TXT records at your domain registrar for acefluento.com.

## SPF Record

Improves email deliverability and tells receiving servers which hosts are allowed to send email for your domain.

| Type | Host | Value |
|------|------|-------|
| TXT  | @    | `v=spf1 include:_spf.google.com ~all` |

> If using Google Workspace / Gmail for `hello@acefluento.com`, `include:_spf.google.com` covers all Google mail servers. Add other `include:` entries if using additional senders (e.g. Mailchimp, SendGrid).

## DMARC Record

Protects against email spoofing and improves deliverability by telling receiving servers how to handle mail that fails SPF/DKIM checks.

| Type | Host    | Value |
|------|---------|-------|
| TXT  | _dmarc  | `v=DMARC1; p=quarantine; rua=mailto:hello@acefluento.com; adkim=r; aspf=r` |

> Start with `p=quarantine` to flag suspicious mail rather than reject it outright. Once you've confirmed no legitimate mail is being affected, upgrade to `p=reject`.

## Verification

After adding records, verify them at:
- SPF: https://mxtoolbox.com/spf.aspx
- DMARC: https://mxtoolbox.com/dmarc.aspx
