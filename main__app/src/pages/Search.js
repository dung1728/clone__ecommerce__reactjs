import React from 'react'
import Style from '../sass/components/_search.module.scss'
export default function Search() {
  return (
    <div><div class="container">
    <form role="search" method="get" className={Style.search_form} action="">
        <label>
    
            <input type="text" className={Style.search_field} placeholder="Search …" value="" name="s" title="Search for:" />
        </label>
        <input type="submit" class={Style.search_submit} value="Search" />
    </form>
    </div></div>
  )
}
