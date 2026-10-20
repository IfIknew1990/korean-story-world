# originals 폴더의 그림을 img 폴더에 webp(150KB 이하)로 줄여 넣는다.
# 이미 줄인 그림은 건너뛰고, 원본이 더 새로우면 다시 만든다. 원본은 건드리지 않는다.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root 'originals'
$dst = Join-Path $root 'img'
$limit = 150KB

if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Host 'ffmpeg를 찾을 수 없어요. ffmpeg가 설치되어 있고 PATH에 있어야 해요.' -ForegroundColor Red
    exit 1
}
New-Item -ItemType Directory -Force $dst | Out-Null

$files = Get-ChildItem $src -File | Where-Object { $_.Extension -match '^\.(png|jpe?g|webp|gif|bmp)$' }
if (-not $files) { Write-Host 'originals 폴더에 그림이 없어요.'; exit 0 }

$made = 0; $skipped = 0; $failed = @()
foreach ($f in $files) {
    $out = Join-Path $dst ($f.BaseName + '.webp')
    if ((Test-Path $out) -and (Get-Item $out).LastWriteTime -ge $f.LastWriteTime) { $skipped++; continue }
    $ok = $false
    foreach ($w in 1200, 1000, 800, 640) {
        foreach ($q in 82, 74, 66, 58, 50) {
            & ffmpeg -hide_banner -loglevel error -y -i $f.FullName -vf "scale='min($w,iw)':-2" -c:v libwebp -quality $q -compression_level 6 $out
            if ($LASTEXITCODE -ne 0) { break }
            if ((Get-Item $out).Length -le $limit) { $ok = $true; break }
        }
        if ($ok) { break }
    }
    if ($ok) {
        $kb = [math]::Round((Get-Item $out).Length / 1KB)
        Write-Host ("만듦: img\{0}.webp ({1}KB)" -f $f.BaseName, $kb)
        $made++
    } else {
        if (Test-Path $out) { Remove-Item $out }
        $failed += $f.Name
    }
}
Write-Host ''
Write-Host ("새로 만든 그림 {0}장, 이미 있던 그림 {1}장" -f $made, $skipped) -ForegroundColor Green
if ($failed) { Write-Host ('150KB 아래로 못 줄인 그림: ' + ($failed -join ', ')) -ForegroundColor Red }
Write-Host 'data.js에는 원본 파일 이름(예: tina-2.png)을 그대로 적으면 돼요.'
