---
name: push-all-remotes
description: 'Push the current branch to every configured Git remote. Use when asked to push to all remotes, all configured remotes, or publish the current branch everywhere.'
---

# Push Current Branch to All Remotes

Use this workflow only when the user asks to push to all configured remotes.

1. Run `git status --short`, `git branch --show-current`, and `git remote`. Do not proceed if there is no current branch or no configured remote.
2. Push the current `HEAD` to each listed remote, in turn. By default, use a same-named branch on that remote. In this workspace, push to `pages` on the `codeberg` remote; use `git push codeberg HEAD:refs/heads/pages`. Follow any explicit per-remote branch mapping requested by the user.
3. Do not force-push, delete remote branches, push tags, or change remotes.
4. Attempt every configured remote even if a previous push fails. Keep each result separately and report successful and failed remotes, including the error for each failure.
5. Verify the final result; never report a failed or unverified push as successful. Do not expose credentials embedded in remote URLs.
