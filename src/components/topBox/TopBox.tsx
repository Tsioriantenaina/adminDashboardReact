import { topDealUsers } from '../../data'
import './topBox.scss'

const TopBox = () => {
  return (
    <div className='topBox'>
        <h1>Top Deals</h1>
        <div className="topBox_list">
            {topDealUsers.map(topDealUser =>(
                <div key={topDealUser.id} className="topBox_list-content">
                    <div className="user">
                        <img src={topDealUser.img} alt="" />
                        <div className="userInfo">
                            <span className='username'>{topDealUser.username}</span>
                            <span className='email'>{topDealUser.email}</span>
                        </div>
                    </div>
                    <span className="amount">${topDealUser.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopBox