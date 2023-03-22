export const getShedule = (shedule) =>
  shedule
    ?.map(({ days, time }) =>
      [days.join(', '), 'c', time.replace('-', 'до')].join(' ')
    )
    .join('<br>')
