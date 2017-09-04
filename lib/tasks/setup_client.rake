desc 'Install client dependencies and migrate tables for db'
task :setup_client do
  exec 'cd client && npm install && npm install --save bootstrap@4.0.0-alpha.6 && npm install --save reactstrap react-transition-group@^1.1.2 react@^15.3.0 react-dom@^15.3.0'
end