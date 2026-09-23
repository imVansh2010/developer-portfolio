# Running the preview

Vite + React 19 + Tailwind 4 portfolio (`vansh-portfolio`).

## 1. Reproduce the uncommitted artifacts

A fresh checkout needs dependencies installed and nothing else.

- **Env files:** none. This project has no `.env*` files at all — there are no
  secrets or per-worktree values to copy from the main checkout. If a `.env*`
  file ever appears in the main checkout, copy it here (copy, never symlink) and
  adapt any port values for this worktree.
- **Dependencies:**

  ```bash
  npm install
  ```

  (`package-lock.json` is committed; use `npm ci` for a clean, reproducible
  install.) `node_modules/` is already present in this worktree.

## 2. Run the server

Vite's default port is **5173**. Check it is free first; if it is taken, pass
`--port <free-port>` (Vite does NOT fail — it silently increments to the next
free port, so verify what it actually bound).

Start it detached with PowerShell so it outlives the conversation. `Start-Process`
does not resolve shell shims, so name the executable exactly (`npm.cmd`, `node.exe`),
and keep stdout and stderr in **different** files:

```bash
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput '<log>' -RedirectStandardError '<log>.err' -WindowStyle Hidden -PassThru).Id"
```

The terminal wrapper may appear to time out because the child holds the pipe
open; that does not mean startup failed. Confirm with the log and the listener:

```bash
cat <log>                        # expect "VITE v7.3.6  ready" + the Local URL
netstat -ano | grep 5173         # expect a LISTENING line; its PID is the node pid
powershell -NoProfile -Command "Get-Process -Id <pid>"
powershell -NoProfile -Command "(Invoke-WebRequest -Uri 'http://localhost:5173/' -UseBasicParsing).StatusCode"
```

Register the preview with the URL and the **node** pid from `netstat` (the pid
that owns the listening socket — not the transient `npm.cmd`/`cmd.exe` wrapper,
which exits and would be reported as dead).

Stop it with `powershell -NoProfile -Command "Stop-Process -Id <pid>"`.

## 3. Viewing the site

The site is behind a **temporary passcode gate** (`src/App.jsx` →
`src/components/PasscodeGate.jsx`, `GATE_ENABLED`). The gate is removed before
launch. The preview tab opens on the passcode screen; it must be unlocked before
any page content renders, so an empty-looking preview means the gate is locked,
not that the build is broken.
