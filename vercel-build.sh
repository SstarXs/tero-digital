#!/bin/bash
npm run build
# Verifica que los assets se copiaron
if [ -d "dist/assets" ]; then
  echo "✅ Assets copiados correctamente"
  ls -la dist/assets/
else
  echo "❌ ERROR: Assets no se copiaron"
  exit 1
fi