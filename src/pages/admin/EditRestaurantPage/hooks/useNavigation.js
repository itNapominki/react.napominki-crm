import React from 'react'

export default function useNavigation() {
  const [activeTab, setActiveTab] = React.useState(0)

  const navigation = [
    {
      text: 'О ресторане',
      onClick: setActiveTab,
    },
    {
      text: 'Поминальные залы',
      onClick: setActiveTab,
    },
    {
      text: 'Поминальное меню',
      onClick: setActiveTab,
    },
    {
      text: 'Инфо для менеджера',
      onClick: setActiveTab,
    },
  ]

  return [activeTab, navigation]
}
