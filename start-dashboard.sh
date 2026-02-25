#!/bin/bash

echo "🚀 Starting Home Comfort Partners Mission Control Dashboard..."
echo ""

# Navigate to the project directory
cd "$(dirname "$0")"

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""
echo "🌐 Starting development server..."
echo "Dashboard will be available at: http://localhost:3000"
echo ""

# Start the Next.js development server
npm run dev

echo "📊 Mission Control Dashboard is running!"
