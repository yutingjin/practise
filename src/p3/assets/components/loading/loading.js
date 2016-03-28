require('./loading.scss');
var React = require('react');

export default React.createClass({
   render: function() {
       return (
       <div className="loading-toast">
           <div className="mask-transparent"></div>
           <div className="toast">
               <div className="loading">
                   <div className="loading-leaf loading-leaf-0"></div>
                   <div className="loading-leaf loading-leaf-1"></div>
                   <div className="loading-leaf loading-leaf-2"></div>
                   <div className="loading-leaf loading-leaf-3"></div>
                   <div className="loading-leaf loading-leaf-4"></div>
                   <div className="loading-leaf loading-leaf-5"></div>
                   <div className="loading-leaf loading-leaf-6"></div>
                   <div className="loading-leaf loading-leaf-7"></div>
                   <div className="loading-leaf loading-leaf-8"></div>
                   <div className="loading-leaf loading-leaf-9"></div>
                   <div className="loading-leaf loading-leaf-10"></div>
                   <div className="loading-leaf loading-leaf-11"></div>
               </div>
               {this.props.tip && <p className="toast-content">{this.props.tip}</p>}
           </div>
       </div>
       )
   }
});