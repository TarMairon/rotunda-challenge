/**
 * 
 * As the values are stored in a simple text file with errors being
 * appended to the end of the file (and I don't really know how
 * these are being stored), it would be a bit of a workload to
 * the file searching for the last 10.
 * 
 * I would add a simple two-value cache. These values would hold:
 *      1. An array of Date, holding when the last 10 error ocurred
 *      2. The time at which the last notification was sent
 * 
 * Whenever an error ocurrs
 *      1. Check if the list for <10
 *      2. If false, check time difference between first and last
 *      2.5. Update list (-> list.unshift(); list.push(errorTime))
 *      3. If <=60s, check time difference between with last notification
 *      4. If > 60s, send notification
 *      4.5. Update last notification time
 * If either is opposite or when finished, carry on with logging
 * 
 * 
 * Alternatively, supposing errors are being logged in a "friendly" way,
 * we could cache just the last notification Date value and fetch
 * the last 10 errors, following a similar process, though I think this
 * would be a slightly more intensive task on the system.
 * 
 */