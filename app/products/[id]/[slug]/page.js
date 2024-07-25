import React from 'react'

export default function Product(props) {
    const {params}=props;
  return (
    <div>page {params.id} {params.slug}</div>
  )
}
