
# Shopper Challenge By Logan Murdock

## Part 1

### Setup on Localhost
- rake setup_client
- rake db:migrate
- rake start

### Discussion About Project

PRIORTIES:
- Clean interface that is welcoming
- Responsive form that politely warns the applicant when incorrect data entered
- Responsive signals to move forward
- Fast and responsive. Demonstrate client side handling.

DIFFICULTIES:
- Spent too much time styling and being concerned with the footer
- Sessions and editing the applicant
- Design solution with a separation between client and api. This caused difficulties that would have been easily solved by using built in rails functionality.

GIVEN MORE TIME
- Would create a more secure login to the user application
- Add additional steps in the process (confirm over 21, etc...)
- Create system for tracking step in the application process
  - Initially took on the task without planning how the user flow would be in state
- Create a more generalized system for changing form components and make info a list
- Hydrate from the database for client side real-time checking of email avaliablity

## Part 2

### Setup instructions
- Add the script into the same folder as the applicants.sqlite3 OR add the sqlite file into the root directory (i.e. shopper-challenge/)
- run: "node workflowByWeek.js '2014-07-01' '2014-09-01'"

### Discussion About Project

DIFFICULTIES:
- Understanding what the assignment was asking for
- Connecting to the sqlite db file
  - Did not understand the script and db file con be completely separate from part 1
  - New to creating a separate script outside a framework

GIVEN MORE TIME
- Work on more efficiently grouping by workflow state
- Look for a way to organize the data so make summation more efficient



