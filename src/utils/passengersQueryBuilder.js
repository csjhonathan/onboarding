function passengerQueryBuilder(page, name, limit){
  const offset = (limit * page) || 0;

  const query = {
    text: `SELECT COUNT(p."fullName") AS travelsCount, p."fullName" AS passengerName
    FROM passenger_travels pt
    LEFT JOIN passengers p ON p.id = pt."passengerId"
    WHERE p."fullName" ILIKE '%' || $3 || '%'
    GROUP BY p."fullName"
    ORDER BY travelsCount DESC
    OFFSET $2
    LIMIT $1;`,
    values:[limit, offset, name]
  }

  return query;
}

export default passengerQueryBuilder