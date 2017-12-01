
var calculateNumbers = function(a,b,sign)
{
  let _a, _b;

  if(a.toString().length > b.toString().length)
  {
    _a = a.toString().split('').reverse();
    _b = b.toString().split('').reverse();
  }
  else if(a.toString().length < b.toString().length)
  {
    _a = b.toString().split('').reverse();
    _b = a.toString().split('').reverse();
  }
  else
  {
    _a = a.toString().split('').reverse();
    _b = b.toString().split('').reverse();
  }

  let _prenos = false;

  _a = _a.map((val,id)=>{
    if(id < _b.length)
    {
      if(_prenos == false)
      {

        if(znak === '+')
        {
          val = parseInt(val) + parseInt(_b[id]);

          if(val >= 10)
          {
            val = val - 10;
            _prenos = true;
          }
        }
        if(znak === '-')
        {
          val = parseInt(val) - parseInt(_b[id]);

          if(val < 0)
          {
            val = val + 10;
            _prenos = true;
          }
        }
      }
      else
      {
        if(znak === '+')
        {
          _prenos = false;
          val = parseInt(val) + parseInt(_b[id]) + 1;

          if(val >= 10)
          {
            val = val - 10;
            _prenos = true;
          }
        }
        else if(znak === '-')
        {
          _prenos = false;
          val = parseInt(val) - (parseInt(_b[id])+1);

          if(val < 0)
          {
            val = val + 10;
            _prenos = true;
          }
        }
      }
    }
    else
    {
      if(znak === '+')
      {
        if(_prenos)
        {
          _prenos = false;
          val = parseInt(val) + 1;

          if(val >= 10)
          {
            val = val - 10;
            _prenos = true;
          }
        }
      }
      else if(znak === '-')
      {
        if(_prenos)
        {
          _prenos = false;

          val = parseInt(val) - 1;

          if(val < 0)
          {
            val = val + 10;
            _prenos = true;
          }
        }
      }
    }

    return val;
  });

  if(_prenos && znak === '+')
  {
    //if(_a.length === _b.length)
      _a[_a.length+1] = 1;

  }

  return _a.reverse().map(String).filter((a,id)=> {
    if(id === 0)
      if(a === '0')
        return '';

    return a;
  }).join('');
};

module.exports = calculateNumbers;
