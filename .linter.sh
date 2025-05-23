#!/bin/bash
cd /home/kavia/workspace/code-generation/ayrah-ma-advisory-showcase-3632-3637/main_container_for_ayrah_ma_showcase
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

