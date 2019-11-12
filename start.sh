# Install dependencies
yarn install

# Kill all processes in port
#? Note: Change PORT to what port you want to.
lsof -ti tcp:5002 | xargs kill

# Start server
yarn start