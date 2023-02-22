import React from 'react'

export default function useNavigation() {
  const [activeTab, setActiveTab] = React.useState(0)

  const navigation = [
    {
      text: 'О ресторане',
      onClick: (i) => setActiveTab(i),
    },
    {
      text: 'Поминальные залы',
      onClick: (i) => setActiveTab(i),
    },
    {
      text: 'Поминальное меню',
      onClick: (i) => setActiveTab(i),
    },
    {
      text: 'Инфо для менеджера',
      onClick: (i) => setActiveTab(i),
    },
  ]

  return [activeTab, navigation]
}
