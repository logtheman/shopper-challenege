namespace :install_client do
  exec 'cd client && npm install'
  exec 'npm install --save reactstrap react-transition-group@^1.1.2 react@^15.3.0 react-dom@^15.3.0'
end
