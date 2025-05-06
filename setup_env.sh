#!/bin/bash
# Setup script for AI-ojisan-project development environment

echo "Setting up development environment for AI-ojisan-project..."

# Create virtual environment
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
    if [ $? -ne 0 ]; then
        echo "Virtual environment creation failed. Please install python3-venv:"
        echo "sudo apt install python3.12-venv"
        exit 1
    fi
else
    echo "Virtual environment already exists."
fi

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Install requirements
echo "Installing required packages..."
pip install -r requirements.txt

# Check for successful installation
if [ $? -eq 0 ]; then
    echo "Environment setup complete!"
    echo "To activate the environment, run: source venv/bin/activate"
else
    echo "Package installation failed. Please check requirements.txt and try again."
    exit 1
fi